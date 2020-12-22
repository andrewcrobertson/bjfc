<script lang="ts">
  import EmojiHappyIcon from '@this/components/icon/EmojiHappyIcon';

  export let totalCount: number = 0;
  export let colour = 'gray';
</script>

<span class="flex items-center text-sm">
  <EmojiHappyIcon class="w-5 h-5 mr-1 text-{colour}-500" />
  {totalCount}
  {totalCount === 1 ? 'Player' : 'Players'}
</span>
