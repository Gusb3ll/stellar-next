import { Icon } from '@iconify-icon/solid';

interface CardProps {
  title: string
  description: string
  githubEnable: boolean
  githubUrl: string
  websiteEnable: boolean
  websiteUrl: string
}

const ProjectCard: any = (props: CardProps) => { 
  return (
    <>
      <div class="md:w-104 w-86 h-34 px-6 py-3 bg-white bg-opacity-6 rounded-md border-1 border-gray-500">
        <div class="flex flex-col justify-start items-start gap-1">
          <h1 class="text-2xl text-white font-thin line-clamp-1">
            { props.title }
          </h1>
          <p class="text-gray-300 font-thin line-clamp-1">
            { props.description }
          </p>
        </div>
        <div class="flex flex-row justify-end items-center gap-8 mt-4 text-white">
            {props.websiteEnable ? (
              <a href={props.websiteUrl} target="_blank" aria-label="website-url" class="cursor-pointer">
                <Icon icon="mdi:globe" style={{ 'font-size': '30px' }} class="opacity-90 hover:opacity-50 transition-opacity ease-in-out" />
              </a>
            ) : <></> }
            {props.githubEnable ? (
              <a href={props.githubUrl} target="_blank" aria-label="github-url" class="cursor-pointer">
                <Icon icon="mdi:github" style={{ 'font-size': '30px' }} class="opacity-90 hover:opacity-50 transition-opacity ease-in-out" />
              </a>
            ) : <></>}
        </div>
      </div>
    </>
  )
}

export default ProjectCard;