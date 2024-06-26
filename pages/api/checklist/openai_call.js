import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
const { Configuration, default: OpenAIApi } = require("openai");

const runPrompt = async (prompt) => {
    
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    
    
    const openai = new OpenAIApi(configuration);
    
    
    // add role as a message to send to openai
    const response = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt: prompt,
        max_tokens: 1000,
        temperature: 1, // random if > 1
    });


    console.log(response.data);

    return response.data;
}


export default runPrompt;