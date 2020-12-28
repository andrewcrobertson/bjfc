<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardPlayer from './components/CardPlayer';
  import type { IState } from './state';
  export let state: IState;

  const colour = 'gray';
  const handleCopy = () => {
    const copyText = 'some cool text';
    copyToClipboard(copyText);
  };

  // Copies a string to the clipboard. Must be called from within an event handler such as click. May return false if it failed, but
  // this is not always possible. Browser support for Chrome 43+, Firefox 42+, Safari 10+, Edge and Internet Explorer 10+.
  // Internet Explorer: The clipboard feature may be disabled by an administrator. By default a prompt is shown the first
  // time the clipboard is used (per session).
  function copyToClipboard(text: string) {
    if (window['clipboardData'] && window['clipboardData'].setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      return window['clipboardData'].setData('Text', text);
    }
    if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      var textarea = document.createElement('textarea');
      textarea.textContent = text;
      textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand('copy'); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn('Copy to clipboard failed.', ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }
  pageTitle.set('Birthdays');
</script>

<div class="container mx-auto xl:py-10">
  {#each state.birthdaysByMonth as { month, players }, i}
    <div class="flex flex-col sm:flex-row sm:justify-between p-2 mb-4 {i === 0 ? '' : 'mt-4'}">
      <AvatarHeading {colour} text="{month} Birthdays" />
      <div class="flex flex-col text-sm space-y-1"><button class="border border-gray-300 px-3 py-1" on:click={handleCopy}>Copy</button></div>
    </div>
    {#each players as player, i}
      <CardPlayer class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {player} />
    {:else}
      <p class="p-4">No players with {month} birthdays</p>
    {/each}
  {:else}
    <p class="p-4">No players with upcoming birthdays</p>
  {/each}
</div>
