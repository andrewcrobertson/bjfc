<script lang="ts">
  import PanelContacts from '../PanelContacts';
  import type { ITeamPlayer } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let player: ITeamPlayer;

  const text = `${player.lastName}, ${player.firstName}`;
  const status = player.status;
</script>

<style>
  .text-sm {
    page-break-inside: avoid;
  }
</style>

<div class="{rootClass} text-sm">
  <div class="flex">
    <h3 class="font-bold pr-2">{text}</h3>
    {player.statusInfo}
    (DoB:
    {player.dateOfBirth})
  </div>
  <PanelContacts class="pl-4" contacts={player.contacts} />
</div>
