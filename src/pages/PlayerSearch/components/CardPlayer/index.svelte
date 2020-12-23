<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import PersonLabelledIcon from '@this/components/labelledIcon/PersonLabelledIcon';
  import PlayerStatusLabelledIcon from '@this/components/labelledIcon/PlayerStatusLabelledIcon';
  import { background } from '@this/constants/theme';
  import { getUrlPlayer } from '@this/utility/getUrl';
  import type { IPlayer } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let player: IPlayer;

  const initials = player.initials;
  const text = `${player.lastName}, ${player.firstName}`;
  const status = player.status;
  const href = getUrlPlayer(player.footyWebNumber);
  const colour = background[player.gender] ?? 'gray';
</script>

<a class="{rootClass} flex flex-col sm:flex-row sm:justify-between p-2" {href}>
  <AvatarHeading {colour} {initials} {text} />
  <span class="flex flex-col text-sm space-y-1">
    <PlayerStatusLabelledIcon class="self-end" iconClass="text-{colour}-500" {status} />
    <PersonLabelledIcon class="self-end" iconClass="text-{colour}-500" text={player.guardians} />
  </span>
</a>
