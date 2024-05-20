import Image from "next/image";
import DescriptionMap from "./components/DescriptionMap";
import Link from "next/link";

// function SectionHeaderText(props) {
//   const { children } = props
//   return (
//     <h4 className="pb-5 text-xl font-semibold">{children}</h4>
//   )
// }

// ^^ This worked okay until I tried to deploy to netlify. At that point the build didn't
//    like how 'props' was working. So researched a bit and learned about React.ReactNode.

interface SectionHeaderTextProps {
  children: React.ReactNode;
}

function SectionHeaderText(props: SectionHeaderTextProps) {
  const { children } = props;
  return (
    <h4 className="pb-5 text-xl font-semibold">{children}</h4>
  );
}

export default function Home() {

  const links = [
    {name: 'Email', link: 'mailto:seantwidmer@gmail.com', content: 'seantwidmer@gmail.com'},
    {name: 'GitHub', link: 'https://github.com/Bomberooski', content: 'seangithub'},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/sean-widmer-98113730/', content: 'seanlinkedin'},
    {name: 'Podcast', link: 'https://www.seanslife.com/podcast', content: 'seanpodcast'}
  ]

   const skills = [
    {name: 'JavaSript', content: ['React', 'React Native', 'SvelteKit', 'Node.js', 'Qwik']},
    {name: 'Python', content: ['Data Analysis', 'Django', 'Flask', 'Data Visualization']},
    {name: 'Web', content: ['Sass','TailwindCSS', 'Firebase', 'NoSQL', 'SQL', 'Netlify', 'AWS', 'GCP', 'DOCKER', 'Kubernetes']},
    {name: 'Design', content: ['Canvas', 'Pixlr', 'Figma']}
   ]

   const workHistory = [
    {name: 'On Air Host + Producer of \'The Jay and Kevin Show\' (2009-2023)', content: 'Co-hosted and produced a top rated morning show weekday mornings 6-10am on KXLY-fm'},
    {name: 'Host of \'Spokane\'s Sports Show\' (2005-2009)', content: 'Hosted and produced a sports radio show weekday afternoons 3-6pm on KGA and KJRB'},
    {name: 'Host of \'The Dickau and Slim Show\' (2014-2016)', content: 'Hosted a sports radio show with Dan Dickau weekday afternoons 1-3pm on KXLX-700 ESPN'},
    {name: 'Music Director KXLY-FM (2022-2023)', content: 'Scheduled music, promotions, concerts and giveaways for The Big 99.9 Coyote Country in Spokane, WA.'}      
   ]

   const hobbies = [
    {name: 'Podcasting', content: 'Have hosted or been a part of numerous podcasts including \'The Sean Widmer Podcast\' since 2005.'},
    {name: 'Basketball', content: 'Coached basketball at \'Northwest Basketball Camp\' from 2001 to 2005 and currently still play at least once a week.'},
    {name: 'Board Game Enthusiast', content: 'I have a love for playing and creating any kind of table top board game.'},
    {name: 'Video Game Creation', content: 'Working on creating a video game app for cell phones.'}

   ]

  return (
    <main className="flex flex-col gap-5 p-4 max-w-[900px] mx-auto w-full">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl sm:py-4 md:py-8">
        Digital Résumé
      </h2>
      <section>
        <SectionHeaderText>Sean Widmer - Web Developer and Radio/Podcast Host + Creator</SectionHeaderText>
        <DescriptionMap list={links} type={"link"} />
      </section>
      <section>
      <SectionHeaderText>Skills</SectionHeaderText>
        <DescriptionMap list={skills} type={"skills"} />
      </section>
      <section>
        <SectionHeaderText>Projects</SectionHeaderText>
        <p className="text-xs sm:text-sm">Checkout my latest <Link href={'/projects'} className="text-sky-400">projects</Link></p>
      </section>
      <section>
        <SectionHeaderText>Work History</SectionHeaderText>
        <DescriptionMap list={workHistory} type={"work"} />
      </section>
      <section>
        <SectionHeaderText>Just For Fun</SectionHeaderText>
        <DescriptionMap list={hobbies} type={"hobbies"} />
      </section>
    </main>
  );
}
