<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import BirthdayLabelledIcon from '@this/components/labelledIcon/BirthdayLabelledIcon';
  import StatusLabelledIcon from '@this/components/labelledIcon/StatusLabelledIcon';
  import { background } from '@this/constants/theme';
  import { getUrlPlayer } from '@this/utility/getUrl';
  import type { ITeamPlayer } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let player: ITeamPlayer;

  const initials = player.initials;
  const text = `${player.lastName}, ${player.firstName}`;
  const status = player.status;
  const href = getUrlPlayer(player.footyWebNumber);
  const colour = background[player.gender] ?? 'gray';
</script>

<a class="{rootClass} flex flex-col sm:flex-row sm:justify-between p-2" {href}>
  <AvatarHeading {colour} {initials} {text} />
  <span class="flex flex-col text-sm space-y-1">
    <StatusLabelledIcon class="self-end" iconClass="text-{colour}-500" {status} text={player.statusInfo} />
    <BirthdayLabelledIcon class="self-end" iconClass="text-{colour}-500" label={player.dateOfBirth} />
  </span>
</a>
