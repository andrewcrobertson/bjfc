<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import PlayerStatusLabelledIcon from '@this/components/labelledIcon/PlayerStatusLabelledIcon';
  import { background } from '@this/constants/theme';
  import type { ITeamPlayerActive } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let player: ITeamPlayerActive;

  const initials = player.initials;
  const text = `${player.lastName}, ${player.firstName}`;
  const status = player.status;
  const href = `/players/${player.footyWebNumber}`;
  const colour = background[player.gender] ?? 'gray';
</script>

<a class="{rootClass} p-2" {href}>
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <AvatarHeading {colour} {initials} {text} />
    <span class="flex justify-end">
      <PlayerStatusLabelledIcon class="text-sm" iconClass="text-{colour}-500" {status} />
    </span>
  </div>
</a>
