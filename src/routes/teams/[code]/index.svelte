<script lang="ts" context="module">
  export async function preload(page, session) {
    const { code } = page.params;
    return { code };
  }
</script>

<script lang="ts">
  import TeamDetailPage from '@this/pages/TeamDetail';
  export let code: string = null;
</script>

<TeamDetailPage {code} />
