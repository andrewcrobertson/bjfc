<script lang="ts">
  import links from './data';
</script>

<ul>
  {#each links as link}
    <li><a href={link}>{link}</a></li>
  {/each}
</ul>
