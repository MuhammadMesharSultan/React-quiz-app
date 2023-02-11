import './App.css'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import Options from './components/options/options';
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './components/result/result'
import Form from './components/form/Form.js'


function App() {

  let percentage=0

  const [quizData, setQuizData] = useState({
    quizName: 'React Quiz',
    totalMarks: 60,
    perQuestionMarks: 10,

    questions: [
      {
        question: "Html Stands For____________________________",
        options: [
          "Hyper Text Makeup Language",
          "html",
          "Case Cading Style Sheet",
          "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
      },
      {
        question: "Css Stands For _______________________",
        options: [
          "Casecading Style Sheet",
          "Java",
          "Ram",
          "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
      },
      {
        question: "Js Stands For _______________________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
      },
      {
        question: "Dom Stands For _______________________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
      },
      {
        question: "Ram Stands For _______________________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
      },
      {
        question: "Rom Stands For _______________________",
        options: [
          "Hyper Text Markup Language",
          "html",
          "HTml",
          "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
      },
    ]
  });
  const { quizName, totalMarks, perQuestionMarks, questions } = quizData;
  const [indexNumber, setindexNumber] = useState(0);
  let [correctAnswer, setCorrectAnswer] = useState(0);
  let [userScore, setUserScore] = useState(0);
  const [statusConfig, setStatusConfig] = useState([
    {
      label: "Correct Ans",
      value: correctAnswer,
      user_score: userScore
    },
    {
      label: "Total Questions",
      value: questions.length
    },
    {
      label: "Attempted Questions",
      value: indexNumber,

    },
  ]
  )

  // start here 
  // const [result, setResult] = useState([
  //   {
  //     label: "Total Marks",
  //     value: totalMarks,
  //   },
  //   {
  //     label: "Per Question Marks",
  //     value:perQuestionMarks
  //   },
  //   {
  //     label:"Percentage",
  //     value: userScore * 100 / totalMarks
  //   }
  // ])

 
  

  // console.log(statusConfig[0].value = correctAnswer, "here the val");
  // console.log(statusConfig); 
  return (
    indexNumber < 6 ? <Box className="main">
      <Box className="Question details" sx={{ backgroundColor: 'black', color: 'white', padding: '15px 50px', margin: '5px' }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>Quiz Name</Typography>
        <Typography variant="h6" sx={{ textAlign: 'right', position: 'relative', top: '30px' }}>Question {''}
          <Typography variant='span'>{indexNumber + 1} / {questions.length}</Typography>


        </Typography>
        <Typography variant='h6'>Total Marks:{totalMarks}</Typography>
      </Box>

      <Box className="Question" sx={{ textAlign: 'center' }}>
        <Typography variant='h4'>Question</Typography>
        <Typography variant='h6'>{questions[indexNumber].question}</Typography>
      </Box>

      <Box>
        <Options
          optionClick={(e) => {
            setindexNumber(indexNumber + 1)
          
            statusConfig[2].value = indexNumber + 1;
            // console.log(statusConfig[0].user_score = userScore, "i am");
            // if (e == questions[indexNumber].correctAns) {
            //   setUserScore(
            //     userScore+=10, 
            //     setCorrectAnswer(correctAnswer + 1),
            //     statusConfig[0].value = correctAnswer,
            //     console.log(userScore ,"he")
            //     )
            // } else {
            //   setUserScore(userScore, setCorrectAnswer(correctAnswer))
            // }

            // e == questions[indexNumber].correctAns ? setUserScore(userScore+10 , setScore(score+1))  : setUserScore(userScore , setScore(score));
            e == questions[indexNumber].correctAns ? setUserScore(userScore += 10, setCorrectAnswer(correctAnswer += 1), statusConfig[0].value = correctAnswer, statusConfig[0].user_score = userScore) : setUserScore(userScore, setCorrectAnswer(correctAnswer));
          }}

          data={questions[indexNumber].options} />
      </Box>

      <Box sx={{ padding: "20px" }}>
        {/* hello */}
        {/* <Typography> <br /> userScore : {userScore}</Typography> */}
        {/* <Typography> Correct Answer : {correctAnswer}</Typography> <br /> */}

        {statusConfig.map((x, i) => {
          return <Typography variant='h6' key={i} >{x.label} : {x.value} </Typography>
        })}
      </Box>

      {/* here is quiz form  */}
      {/* <Box>
        <Quizform />
      </Box> */}
    </Box> :
      <Box>
        here
        <Result data={statusConfig} quesLength={questions.length} />
      </Box>
  )
}

export default App