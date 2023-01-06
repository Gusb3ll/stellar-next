import { Component, onMount } from 'solid-js';
import GlitchedWriter, { presets } from 'glitched-writer'
import Webring from '../components/img/webring'
import Garten from '../components/img/garten';

const Home: Component = () => {
  onMount(async () => {
    const writer = new GlitchedWriter(document.getElementById('writer'), { ...presets.nier })
    writer.queueWrite(['ガスベル', 'Gusbell'], 4000, true)
  })
  return (
    <>
      <main class="flex h-[85vh] justify-center items-center">        
        <h1 class="-mt-12 xl:text-9xl md:text-8xl text-6xl text-white font-thin tracking-wider uppercase select-none">
          <div id="writer" />
        </h1>
        <div class="absolute bottom-12">
          <div class="flex flex-row gap-8">
            <a href="https://webring.wonderful.software#gusbell.tech" title="วงแหวนเว็บ" target="_blank">
              <Webring />
            </a>
            <a href="https://creatorsgarten.org/ring" title="creatorsgarten" target="_blank">
              <Garten />
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home