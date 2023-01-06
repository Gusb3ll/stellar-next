import { Component, For, onMount } from 'solid-js';
import GlitchedWriter, { presets } from 'glitched-writer';
import projects from '../assets/projects.json';
import ProjectCard from '../components/projectCard';

const Projects: Component = () => {
  let proj = projects.map((proj) => { return proj });
  onMount(() => {
    const writer = new GlitchedWriter(document.getElementById('writer'), { ...presets.nier })
    writer.write('Projects');
  })
  return (
    <>
      <main class="flex h-full w-screen justify-center">
        <div class="flex flex-col h-full w-full gap-12 my-8">
          <h1 class="md:text-5xl text-4xl text-white text-center font-thin tracking-widest uppercase select-none">
            <div id="writer" />
          </h1>
          <div class="grid h-full w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row place-items-center gap-y-8">
            <For each={proj}>
              {(proj) =>
              <ProjectCard
                title={proj.title}
                description={proj.description}
                githubEnable={proj.githubEnable}
                githubUrl={proj.githubUrl}
                websiteEnable={proj.websiteEnable}
                websiteUrl={proj.websiteUrl}
              />}
            </For>
          </div>
        </div>
      </main>
    </>
  )
}

export default Projects