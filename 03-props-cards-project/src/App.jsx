import Card from "./Components/Card";
import "./App.css";

function App() {
  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 184,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 128,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 145,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 132,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "3 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 150,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 118,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 140,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      companyName: "IBM",
      datePosted: "6 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 122,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      companyName: "Oracle",
      datePosted: "3 weeks ago",
      post: "Java Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 110,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png?20210504050649",
      companyName: "Salesforce",
      datePosted: "8 days ago",
      post: "UX Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 46,
      location: "Mumbai, India"
    }
  ];

  return (
    <div className="parent">
      {jobOpenings.map((job, index) => (
        <Card
          key={index}
          company={job.companyName}
          datePosted={job.datePosted}
          tag1={job.tag1}
          post={job.post}
          tag2={job.tag2}
          pay={job.pay}
          brandLogo={job.brandLogo}
        />
      ))}
    </div>
  );
}

export default App;
