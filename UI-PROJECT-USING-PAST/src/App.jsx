
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users = [ 
       {img :"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        intro : ""    ,
        tag :  "Satisfied"
       },

       { img :"https://media.istockphoto.com/id/1262283526/photo/indian-girl-student-wear-headphones-learning-online-watching-webinar-class-looking-at-laptop.jpg?s=2048x2048&w=is&k=20&c=1qXe3QcWLA0WkA5asYq16P1YfOhInYO1aul5NftkTk8=" ,
        intro : ""    ,
        tag :  "UnderServer"
       },

       {
         img :"https://plus.unsplash.com/premium_photo-1684769160374-c2c3505aa1b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        intro : ""    ,
        tag :  "UnderBanked"
       },

           {

         img :"https://plus.unsplash.com/premium_photo-1670884442400-cb8b9d37613d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        intro : ""  ,
        tag :  "HotProblem"
       }
       
  ]
  return (
    <div >
      <Section1 users = {users} />
      <Section2 />
    </div>
  )
}

export default App
