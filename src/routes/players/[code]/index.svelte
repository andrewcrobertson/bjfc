<script lang="ts" context="module">
  export async function preload(page, session) {
    const { code } = page.params;
    return { code };
  }
</script>

<script lang="ts">
  import MemberDetailPage from '@this/pages/MemberDetail';
  export let code: string = null;
</script>

<MemberDetailPage {code} />
