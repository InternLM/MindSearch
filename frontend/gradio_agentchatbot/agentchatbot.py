"""gr.Chatbot() component."""

from __future__ import annotations

from pathlib import Path
from typing import Any, Callable, Literal

from gradio import utils
from gradio.components.base import Component
from gradio.events import Events
from gradio.processing_utils import move_resource_to_block_cache
from gradio_client import utils as client_utils

from .utils import ChatbotData, ChatFileMessage, ChatMessage, FileData


class AgentChatbot(Component):
    """
    Creates a chatbot that displays user-submitted messages and responses. Supports a subset of Markdown including bold, italics, code, tables.
    Also supports audio/video/image files, which are displayed in the AgentChatbot, and other kinds of files which are displayed as links. This
    component is usually used as an output component.

    Demos: chatbot_simple, chatbot_multimodal
    Guides: creating-a-chatbot
    """

    EVENTS = [Events.change]
    data_model = ChatbotData

    def __init__(
        self,
        value: list[dict[str, Any]] | Callable | None = None,
        *,
        label: str | None = None,
        every: float | None = None,
        show_label: bool | None = None,
        container: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        visible: bool = True,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
        key: int | str | None = None,
        height: int | str | None = None,
        latex_delimiters: list[dict[str, str | bool]] | None = None,
        rtl: bool = False,
        show_share_button: bool | None = None,
        show_copy_button: bool = False,
        avatar_images: tuple[str | Path | None, str | Path | None] | None = None,
        sanitize_html: bool = True,
        render_markdown: bool = True,
        bubble_full_width: bool = True,
        line_breaks: bool = True,
        likeable: bool = False,
        layout: Literal["panel", "bubble"] | None = None,
        placeholder: str | None = None,
    ):
        """
        Parameters:
            value: Default value to show in chatbot. If callable, the function will be called whenever the app loads to set the initial value of the component.
            label: The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.
            every: If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.
            show_label: if True, will display label.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.
            min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            visible: If False, component will be hidden.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            render: If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
            key: if assigned, will be used to assume identity across a re-render. Components that have the same key across a re-render will have their value preserved.
            height: The height of the component, specified in pixels if a number is passed, or in CSS units if a string is passed.
            latex_delimiters: A list of dicts of the form {"left": open delimiter (str), "right": close delimiter (str), "display": whether to display in newline (bool)} that will be used to render LaTeX expressions. If not provided, `latex_delimiters` is set to `[{ "left": "$$", "right": "$$", "display": True }]`, so only expressions enclosed in $$ delimiters will be rendered as LaTeX, and in a new line. Pass in an empty list to disable LaTeX rendering. For more information, see the [KaTeX documentation](https://katex.org/docs/autorender.html).
            rtl: If True, sets the direction of the rendered text to right-to-left. Default is False, which renders text left-to-right.
            show_share_button: If True, will show a share icon in the corner of the component that allows user to share outputs to Hugging Face Spaces Discussions. If False, icon does not appear. If set to None (default behavior), then the icon appears if this Gradio app is launched on Spaces, but not otherwise.
            show_copy_button: If True, will show a copy button for each chatbot message.
            avatar_images: Tuple of two avatar image paths or URLs for user and bot (in that order). Pass None for either the user or bot image to skip. Must be within the working directory of the Gradio app or an external URL.
            sanitize_html: If False, will disable HTML sanitization for chatbot messages. This is not recommended, as it can lead to security vulnerabilities.
            render_markdown: If False, will disable Markdown rendering for chatbot messages.
            bubble_full_width: If False, the chat bubble will fit to the content of the message. If True (default), the chat bubble will be the full width of the component.
            line_breaks: If True (default), will enable Github-flavored Markdown line breaks in chatbot messages. If False, single new lines will be ignored. Only applies if `render_markdown` is True.
            likeable: Whether the chat messages display a like or dislike button. Set automatically by the .like method but has to be present in the signature for it to show up in the config.
            layout: If "panel", will display the chatbot in a llm style layout. If "bubble", will display the chatbot with message bubbles, with the user and bot messages on alterating sides. Will default to "bubble".
            placeholder: a placeholder message to display in the chatbot when it is empty. Centered vertically and horizontally in the AgentChatbot. Supports Markdown and HTML. If None, no placeholder is displayed.
        """
        self.likeable = likeable
        self.height = height
        self.rtl = rtl
        if latex_delimiters is None:
            latex_delimiters = [{"left": "$$", "right": "$$", "display": True}]
        self.latex_delimiters = latex_delimiters
        self.show_share_button = (
            (utils.get_space() is not None) if show_share_button is None else show_share_button
        )
        self.render_markdown = render_markdown
        self.show_copy_button = show_copy_button
        self.sanitize_html = sanitize_html
        self.bubble_full_width = bubble_full_width
        self.line_breaks = line_breaks
        self.layout = layout
        super().__init__(
            label=label,
            every=every,
            show_label=show_label,
            container=container,
            scale=scale,
            min_width=min_width,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            render=render,
            key=key,
            value=value,
        )
        self.avatar_images: list[dict | None] = [None, None]
        if avatar_images is None:
            pass
        else:
            self.avatar_images = [
                self.serve_static_file(avatar_images[0]),
                self.serve_static_file(avatar_images[1]),
            ]
        self.placeholder = placeholder

    def preprocess(
        self,
        payload: ChatbotData | None,
    ) -> list[ChatMessage | ChatFileMessage] | None:
        """
        Parameters:
            payload: data as a ChatbotData object
        Returns:
            Passes the messages in the chatbot as a `list[list[str | None | tuple]]`, i.e. a list of lists. The inner list has 2 elements: the user message and the response message. Each message can be (1) a string in valid Markdown, (2) a tuple if there are displayed files: (a filepath or URL to a file, [optional string alt text]), or (3) None, if there is no message displayed.
        """
        return payload.root

    def _postprocess_chat_messages(self, chat_message: ChatMessage) -> list[ChatMessage]:
        if chat_message is None:
            return None

        if isinstance(chat_message, ChatFileMessage):
            chat_message.file.path = move_resource_to_block_cache(
                chat_message.file.path, block=self
            )
            return [chat_message]

        # extract file path from message
        new_messages = []
        # for word in chat_message.content.split(" "):
        #     if (filepath := Path(word)).exists() and filepath.is_file():
        #         filepath = move_resource_to_block_cache(filepath, block=self)
        #         mime_type = client_utils.get_mimetype(filepath)
        #         new_messages.append(
        #             ChatFileMessage(
        #                 role=chat_message.role,
        #                 thought=chat_message.thought,
        #                 thought_metadata=chat_message.thought_metadata,
        #                 file=FileData(path=filepath, mime_type=mime_type),
        #             )
        #         )

        return [chat_message, *new_messages]

    def postprocess(
        self,
        value: list[ChatMessage | ChatFileMessage] | None,
    ) -> ChatbotData:
        """
        Parameters:
            value: expects a `list[list[str | None | tuple]]`, i.e. a list of lists. The inner list should have 2 elements: the user message and the response message. The individual messages can be (1) strings in valid Markdown, (2) tuples if sending files: (a filepath or URL to a file, [optional string alt text]) -- if the file is image/video/audio, it is displayed in the AgentChatbot, or (3) None, in which case the message is not displayed.
        Returns:
            an object of type ChatbotData
        """
        if value is None:
            return ChatbotData(root=[])
        processed_messages = [
            msg for message in value for msg in self._postprocess_chat_messages(message)
        ]
        return ChatbotData(root=processed_messages)

    def example_payload(self) -> Any:
        return [
            ChatMessage(role="user", content="Hello!").model_dump(),
            ChatMessage(role="assistant", content="How can I help you?").model_dump(),
        ]

    def example_value(self) -> Any:
        return [
            ChatMessage(role="user", content="Hello!"),
            ChatMessage(role="assistant", content="How can I help you?"),
        ]
