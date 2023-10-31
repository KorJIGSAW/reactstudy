import React, { useState } from 'react';
import { LoremIpsum } from "lorem-ipsum";
import backgroundImage from './Hansung.jpg';

const lorem = new LoremIpsum({
  words: ["한글", "가짜", "텍스트", "생성", "테스트", "예시", "단어", "목록", "문장", "구성", "아무 의미없는", "진짜 어렵다", "리액트", "스터디", "공부", "중간고사", "과자에는"], 
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

console.log(lorem.generateSentences(5));

const App = () => {
    const [paragraphs, setParagraphs] = useState(1);
    const [length, setLength] = useState('짧게');
    const [text, setText] = useState(""); 

    const handleParagraphsChange = (e) => {
        setParagraphs(e.target.value);
    }

    const handleLengthChange = (e) => {
        setLength(e.target.value);
    }

    const generateText = () => {
        let content = '';
        let sentenceCount;
        if (length === '짧게') {
            sentenceCount = 2;
        } else if (length === '중간') {
            sentenceCount = 4;
        } else {
            sentenceCount = 6;
        }

        for (let i = 0; i < paragraphs; i++) {
            const line = lorem.generateSentences(sentenceCount);
            content += line + '\n\n';
        }

        setText(content);
    }

    const appStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    return (
        <div style={appStyle}>
            <h1>문단 생성기</h1>
            <label>
                문단 수 : 
                <input type="number" min="1" max="5" value={paragraphs} onChange={handleParagraphsChange} />
            </label>
            <label>
                문단 길이 : 
                <select value={length} onChange={handleLengthChange}>
                    <option value="짧게">짧게</option>
                    <option value="중간">중간</option>
                    <option value="길게">길게</option>
                </select>
            </label>
            <div style={{ margin: '20px 0' }}>
                <button onClick={generateText}>본문 생성</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <textarea value={text} readOnly />
            </div>
        </div>
    );
};

export default App;
