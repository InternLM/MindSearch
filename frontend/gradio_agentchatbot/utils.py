from typing import List, Literal, Optional, Union

from gradio.data_classes import FileData, GradioModel, GradioRootModel
from pydantic import Field


class ThoughtMetadata(GradioModel):
    tool_name: Optional[str] = None
    error: bool = False


class Message(GradioModel):
    role: Literal["user", "assistant"]
    thought_metadata: ThoughtMetadata = Field(default_factory=ThoughtMetadata)


class ChatMessage(Message):
    content: str


class ChatFileMessage(Message):
    file: FileData
    alt_text: Optional[str] = None


class ChatbotData(GradioRootModel):
    root: List[Union[ChatMessage, ChatFileMessage]]
