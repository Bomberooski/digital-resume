// import React from 'react'

// export default function DescriptionMap(props) {

//     const { list , type  } = props

//     const contentDisplay = {
//         "link": (obj) => <a className="text-sky-400 cursor-pointer" href={obj.link} target='_blank'>{obj.content}</a>,
//         "skills": (obj) => <p>{obj.content.join(', ')}</p>,
//         "work": (obj) => <p>{obj.content}</p>,
//         "hobbies": (obj) => <p>{obj.content}</p>
//     }

//   return (
//     <div className='flex flex-col gap-3'>
//         {list.map((listItem, listIndex) => {
//           return (
//             <div key={listIndex} className='relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm'>
//               <div className='bg-teal-400 duration-300 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0  '></div>
//               <p><b>{listItem.name}</b></p>
//               {contentDisplay[type](listItem)}
//             </div>
//           )
//         })}
//     </div>
//   )
// }


import React from 'react';

interface ListItem {
  name: string;
  content: string | string[]; // Adjust this type according to your data structure
  link?: string; // Adding the optional link property
}

type MapType = "link" | "skills" | "work" | "hobbies"; // Adjust this type as per your requirements

interface DescriptionMapProps {
  list: ListItem[];
  type: MapType;
}

export default function DescriptionMap(props: DescriptionMapProps) {
  const { list, type } = props;

  const contentDisplay = {
    "link": (obj: ListItem) => obj.link ? (
      <a className="text-sky-400 cursor-pointer" href={obj.link} target='_blank'>{obj.content}</a>
    ) : (
      <p>{obj.content}</p>
    ),
    "skills": (obj: ListItem) => <p>{Array.isArray(obj.content) ? obj.content.join(', ') : obj.content}</p>,
    "work": (obj: ListItem) => <p>{obj.content}</p>,
    "hobbies": (obj: ListItem) => <p>{obj.content}</p>
  };

  return (
    <div className='flex flex-col gap-3'>
      {list.map((listItem, listIndex) => {
        return (
          <div key={listIndex} className='relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm'>
            <div className='bg-teal-400 duration-300 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0'></div>
            <p><b>{listItem.name}</b></p>
            {contentDisplay[type](listItem)}
          </div>
        );
      })}
    </div>
  );
}
