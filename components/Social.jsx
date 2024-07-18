import Link from "next/link";
import{FaGithub,FaLinkedinIn}from "react-icons/fa"

const socials=[
    {icon: <FaGithub />, path:"https://github.com/shahzaibkhan1993"},
    {icon: <FaLinkedinIn />, path:"https://pk.linkedin.com/in/shahzeb-khan-60892213b"},
  
]
const Social = ({containterStyles,iconStyles}) => {
  return <div className={containterStyles}>
    {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
        </Link>
    })}
  </div>
}

export default Social