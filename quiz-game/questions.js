export const questions = [
    {
        topic: 'React',
        questions: [
            {
                id: 1,
                question:
                    'What would the props object look like for the following call to the Pet component?',
                code: `<Pet name='Benny' age=6 />`,
                answer: `{name: 'Benny', age: 6}`,
            },
            {
                id: 2,
                question: 'Refactor the Pet component so the return statement is valid:',
                code: `export default function Pet(props){ 
return (<div><h1>{name} is {age} years old.</h1></div>
}
`,
                answer: `export default function Pet({name, age}){ 
  return (<div><h1>{name} is {age} years old.</h1></div>
}
`,
            },
            {
                id: 3,
                question: 'How would you create a React Router route for the following url?',
                code: `https://www.example.com/users/7/`,
                answer: `<Route exact path="/users/:id" />`,
            },
            {
                id: 4,
                question:
                    'When rendering a list using the JavaScript map() method, what is required for each element rendered?',
                answer: 'key prop',
            },
            {
                id: 5,
                question: 'Find the bug in this React code:',
                code: `function car({make, model}) {
return <h1>{make} {model}</h1>;
}
              `,
                answer: 'Capitalize car.',
            },
        ],
    },
    {
        topic: 'Javascript',
        questions: [
            {
                id: 1,
                question: 'What variables will be available for you in this function?',
                code: `const myFunction ({
user: {
  address: {
    number, street, city, state
  }, 
  username,
  created_at
}){...}`,
                answer: 'number, street, city, state, username and created_at',
            },
            {
                id: 2,
                question: 'How can you combine the following arrays using the spread operator?',
                code: `const array1 = [1, 2, 3];
const array2 = [4, 5, 6];`,
                answer: `const arr3 = [...array1, ...array2]`,
            },
            {
                id: 3,
                question: 'What is the output of the following code:',
                code: `const make = 'Ford';
const model = 'Mustang';
const car = { make, model };
console.log(car);`,
                answer: `{make: 'Ford', model: 'Mustang'}`,
            },
            {
                id: 4,
                question: 'What is the output of the following code:',
                code: `const name = 'Benny';
const breeds = ['Perkingese', 'Chihauhau'];
const pet = {breeds: [...breeds, 'Terrier'], name};
console.log(pet)`,
                answer: `{breeds: ['Pekingese', 'Chihauhau', 'Terrier'], name: 'Benny'}`,
            },
        ],
    },
    {
        topic: 'Supabase / Databases / APIs',
        questions: [
            {
                id: 1,
                question: 'What type of database powers Supabase?',
                answer: 'Postgres',
            },
            {
                id: 2,
                question: 'What is the language that you would use to query a postgres database?',
                answer: 'SQL',
            },
            {
                id: 3,
                question:
                    'What is the name for a column that references another table’s primary key?',
                answer: 'Foreign Key',
            },
            {
                id: 4,
                question: 'What does REST stand for and what is it used for?',
                answer: 'Representational State Transfer - an architecture for defining routes',
            },
            {
                id: 5,
                question: 'Name 2 different data formats commonly returned from APIs.',
                answer: 'JSON and XML',
            },
        ],
    },
];
