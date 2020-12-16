<script lang="ts">
  import type { PlayerStatusEnum } from '@this/constants/enums';
  import * as playerStatusEnum from '@this/constants/playerStatusEnum';
  import ClipboardListIcon from '@this/icons/ClipboardListIcon';
  import ExclamationIcon from '@this/icons/ExclamationIcon';
  import LogoutIcon from '@this/icons/LogoutIcon';
  import ShieldCheckIcon from '@this/icons/ShieldCheckIcon';
  import XIcon from '@this/icons/XIcon';

  let rootClass = '';
  export { rootClass as class };
  export let status: PlayerStatusEnum = playerStatusEnum.unknown;
</script>

{#if status === playerStatusEnum.insured}
  <ShieldCheckIcon class="{rootClass} w-5 h-5 mr-1" />
  Insured
{:else if status === playerStatusEnum.registered}
  <ClipboardListIcon class="{rootClass} w-5 h-5 mr-1" />
  Registered
{:else if status === playerStatusEnum.recent}
  <ShieldCheckIcon class="{rootClass} w-5 h-5 mr-1" />
  Recent
{:else if status === playerStatusEnum.transferred}
  <LogoutIcon class="{rootClass} w-5 h-5 mr-1" />
  Transferred
{:else if status === playerStatusEnum.historical}
  <XIcon class="{rootClass} w-5 h-5 mr-1" />
  Historical
{:else}
  <ExclamationIcon class="{rootClass} w-5 h-5 mr-1" />
  Unknown
{/if}
