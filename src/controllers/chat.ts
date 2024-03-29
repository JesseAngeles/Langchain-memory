import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate, MessagesPlaceholder, } from "@langchain/core/prompts";
import { BufferMemory } from "langchain/memory";
import { LLMChain } from "langchain/chains";

const chatModel = new ChatOpenAI({
    temperature: 0.2,
    openAIApiKey: '/*API KEY*/',
    modelName: 'gpt-4',
    maxTokens: 200
});

const chatPrompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a nice chatbot having a conversation with a human."],
    new MessagesPlaceholder("chat_history"),
    ["human", "{question}"],
]);

const memory = new BufferMemory({
    memoryKey: 'chat_history',
    returnMessages: true
});

const chatConversationChain = new LLMChain({
    llm: chatModel,
    prompt: chatPrompt,
    verbose: true,
    memory: memory
});

export async function answer(question: string): Promise<string> {
    try {
        const quest = await chatConversationChain.invoke({ question });
        return quest.text;
    } catch (error) {
        console.error("Error al procesar la pregunta:", error);
        throw error; 
    }
}

// await chatConversationChain.invoke({ question: "Cual es tu nombre?" });
// const answer = await chatConversationChain.invoke({ question: "Cual fue la ultima pregunta?" });
