import { Icon } from '@iconify-icon/solid'
import { Component, onMount } from 'solid-js'
import GlitchedWriter, { presets } from 'glitched-writer'

interface CardProps {
  title: string
  description: string
  githubEnable: boolean
  githubUrl: string
  websiteEnable: boolean
  websiteUrl: string
}

const ProjectCard: Component<CardProps> = (props: CardProps) => {
  // eslint-disable-next-line solid/reactivity
  const slug = props.title.toLowerCase().replace(/ /g, '-')
  onMount(() => {
    const titleWriter = new GlitchedWriter(
      document.getElementById(`${slug}-writer`),
      {
        ...presets.nier,
      }
    )
    const descriptionWriter = new GlitchedWriter(
      document.getElementById(`${slug}-writer-description`),
      {
        ...presets.nier,
      }
    )
    titleWriter.write(props.title)
    descriptionWriter.write(props.description)
  })
  return (
    <>
      <div class="lg:w-[30vw] md:w-[40vw] w-86 h-34 px-6 py-3 bg-white bg-opacity-5 rounded-md border-1 border-gray-500">
        <div class="flex flex-col justify-start items-start gap-1">
          <h1
            id={`${slug}-writer`}
            class="text-2xl text-white font-thin line-clamp-1"
          />
          <p
            id={`${slug}-writer-description`}
            class="text-gray-300 font-thin line-clamp-1"
          />
        </div>
        <div class="flex flex-row justify-end items-center gap-8 mt-4 text-white">
          {props.websiteEnable ? (
            <a
              href={props.websiteUrl}
              target="_blank"
              aria-label="website-url"
              class="cursor-pointer"
            >
              <Icon
                icon="mdi:globe"
                style={{ 'font-size': '30px' }}
                class="opacity-80 hover:opacity-50 transition-opacity ease-in-out"
              />
            </a>
          ) : (
            <></>
          )}
          {props.githubEnable ? (
            <a
              href={props.githubUrl}
              target="_blank"
              aria-label="github-url"
              class="cursor-pointer"
            >
              <Icon
                icon="mdi:github"
                style={{ 'font-size': '30px' }}
                class="opacity-80 hover:opacity-50 transition-opacity ease-in-out"
              />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectCard
