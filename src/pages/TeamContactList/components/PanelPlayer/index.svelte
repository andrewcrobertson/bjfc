<script lang="ts">
  import PanelContacts from '../PanelContacts';
  import CardPlayer from '../CardPlayer';
  import type { ITeamPlayer } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let players: ITeamPlayer[] = [];
  export let emptyMessage = '';
</script>

<div class="{rootClass} flex flex-wrap">
  {#each players as player, i}
    <CardPlayer class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {player} />
    <PanelContacts contacts={player.contacts} />
  {:else}
    <p class="p-4">{emptyMessage}</p>
  {/each}
</div>
