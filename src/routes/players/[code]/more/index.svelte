<script lang="ts" context="module">
  export async function preload(page, session) {
    const { code } = page.params;
    return { code };
  }
</script>

<script lang="ts">
  import PlayerDetailMorePage from '@this/pages/PlayerDetailMore';
  export let code: string = null;
</script>

<PlayerDetailMorePage {code} />
