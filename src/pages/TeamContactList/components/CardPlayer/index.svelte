<script lang="ts">
  import BirthdayLabelledIcon from '@this/components/labelledIcon/BirthdayLabelledIcon';
  import StatusLabelledIcon from '@this/components/labelledIcon/StatusLabelledIcon';
  import PanelContacts from '../PanelContacts';
  import type { ITeamPlayer } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let player: ITeamPlayer;

  const text = `${player.lastName}, ${player.firstName}`;
  const status = player.status;
</script>

<div class="{rootClass} text-sm">
  <div class="flex">
    <h3 class="font-bold pr-2">{text}</h3>
    <div class="flex text-sm">
      <StatusLabelledIcon class="pr-2" iconClass="text-gray-500" {status} text={player.statusInfo} />
      <BirthdayLabelledIcon iconClass="text-gray-500" label={player.dateOfBirth} />
    </div>
  </div>
  <PanelContacts class="pl-4" contacts={player.contacts} />
</div>
