import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
      {name: 'Personal Portfolio', link: 'https://seans-pro-portfolio.netlify.app/', description: 'This is where my coding joureny is held. Starting with the most basic of projects and continuing to where I am at now, I am extremely proud of all of them. Leaving a 20 year career in radio was hard to do and pursuing a career in tech is a daunting task but each and every day I get better at it and I am excited to share what I have learned. ', videoLink: 'pro-portfolio.mov'},
      {name: 'Tenzies', link: 'https://seanstenzies.netlify.app/', description: 'I\'m a lover of games. Card games, board games, video games, you name it I\'ll play it. So part of this journey includes a desire to create and/or program any kind of game I can think of. Here is my first foray into that world.', videoLink: 'tenzies.mov'},
      {name: 'ToDo List', link: 'https://seansreacttodolist.netlify.app/', description: 'If my wife has taught me one thing it\'s that I need a ToDo list! You probably do too. So here\'s one for you to try out and use!', videoLink: 'todolist.mov'},
      {name: 'Fake Store Front', link: 'https://seans-fake-store.netlify.app/', description: 'A fake store front made using NextJs and Stripe.' videoLink: 'fakestore.mov'}
    ]

    return (
    <main className="flex flex-col flex-1 bg-slate-100">
      {projects.map((project, projectIndex) => {
        return (
          <ProjectCard key={projectIndex} project={project} index={projectIndex}/>
        )
      })}
    </main>
  );
}
