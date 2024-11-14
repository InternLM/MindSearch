# MindSearch 介绍及原理
## 介绍
### Google 、百度 等 Web搜索引擎改变了过去寻找信息的方式，ChatGPT的爆火出圈为信息寻求答案添加了新范式。大语言模型 (Large Language Model，LLM) 蓬勃发展，许多模型在通过优化搜索引擎策略来解决信息寻求和集成任务上普遍遇到三个挑战：
1. 在面对复杂请求时，搜索引擎难以一次性精确回复所需的全量网络信息；
2. 要集成的相关信息散布在多个网页中，存在信息干扰；
3. 大量的网络内容可能超过大语言模型可处理的上下文长度。
受人类解决这些问题时的认知过程的启发，MindSearch模拟人类在网络信息搜索和整合中的思维过程，通过一个简单而有效的基于LLM的多代理框架来实例化，该框架由WebPlanner（网络规划师）和WebSearcher组成。
MindSearch的多代理设计使整个框架能够在3分钟内从更大规模（超过300个）网页中并行地寻找和整合信息，值得3小时的人力努力，可以用ChatGPT-4o或InternLM2.5-7B模型作为基座。MindSearch在Closed-Set  （封闭集）和 Open-Set （开放集）QA问题的深度、广度以及准确度（facticity）方面的响应质量都有显著提高。此外，基于InternLM2.5-7B的MindSearch的反应比ChatGPT-Web（GPT-4o）和Perplexity.ai 更可取，这意味着开源模型的 MindSearch已经可以为人工智能搜索引擎提供一个有竞争力的解决方案。
[图片]
<img width="1591" alt="image" src="https://github.com/user-attachments/assets/58727fec-8d83-417d-88e5-eedc631444f2">
2 WebPlanner and WebSearcher
MindSearch框架由一个WebPlanner和一组WebSearcher组成。
[图片]
2.1 WebPlanner: Planning via Graph Construction   (通过图形构建进行规划)
WebPlanner充当高级规划员，协调推理步骤和协调其他代理。
为了提高LLM处理复杂问题的能力，将解决问题的过程建模为一个有向无环图（DAG）。
给定一个用户问题Q，解轨迹表示为G(Q)=V，E，其中V是一组节点V，每个节点代表一个独立的网络搜索，包括一个辅助启动节点（初始问题）和一个END节点（最终答案）。E表示有向边，表示节点（搜索内容）之间的推理拓扑关系（搜索内容）。这种DAG形式主义捕获了寻找最优执行路径的复杂性，为LLM提供了更正式和直观的表示。
预定义了原子代码函数，以将节点或边添加到图中。
在每个回合中，LLM首先读取整个对话，包括之前生成的代码和web搜索结果，然后输出思想和新代码用于思维导图的推理，这是由Python解释器执行的。在执行期间，一旦一个节点被添加到推理图中，它将调用一个WebSearcher来执行搜索过程并总结信息。
