<script lang="ts">
  import split from 'lodash/split';
  import join from 'lodash/join';
  import PhoneIcon from '@this/icons/PhoneIcon';
  import ChatAltIcon from '@this/icons/ChatAltIcon';
  let rootClass = '';
  export { rootClass as class };
  export let phone = null;
  export let colour = 'gray';

  const sanitisePhone = (phone: string) => join(split(phone, ' '), '');
</script>

<div class="flex">
  {#if phone === null}
    <div class="{rootClass} cursor-default inline-flex flex-grow items-center text-sm bg-gray-100 border border-gray-300 px-3 py-3 ">
      <PhoneIcon class="inline w-5 h-5 text-{colour}-500 mr-2" />
      Not Listed
    </div>
    <a class="{rootClass} inline-flex items-center text-sm bg-gray-100 border border-gray-300 border-l-0 px-6 py-3" href="sms:{sanitisePhone(phone)}">
      <ChatAltIcon class="inline w-5 h-5 text-{colour}-500" />
    </a>
  {:else}
    <a class="{rootClass} inline-flex flex-grow items-center text-sm border border-gray-300 px-3 py-3 " href="tel:{sanitisePhone(phone)}">
      <PhoneIcon class="inline w-5 h-5 text-{colour}-500 mr-2" />
      {phone}
    </a>
    <a class="{rootClass} inline-flex items-center text-sm border border-gray-300 border-l-0 px-6 py-3 " href="sms:{sanitisePhone(phone)}">
      <ChatAltIcon class="inline w-5 h-5 text-{colour}-500" />
    </a>
  {/if}
</div>
