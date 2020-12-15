<script lang="ts">
  import EmailButton from '@this/components/EmailButton';
  import PhoneButton from '@this/components/PhoneButton';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';

  let rootClass = '';
  export { rootClass as class };
  export let guardian: any = {};

  const { initials, firstName, lastName, phone1, phone2, mobile, email, gender } = guardian;
  const colour = personBackground[gender ?? personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 p-6">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font ml-2">{firstName} {lastName}</h2>
    </div>
    <div class="flex flex-col -mb-3">
      <PhoneButton class="mb-2" label="Phone 1" phone={phone1} {colour} />
      <PhoneButton class="mb-2" label="Phone 2" phone={phone2} {colour} />
      <PhoneButton class="mb-2" label="Mobile" phone={mobile} {colour} />
      <EmailButton class="mb-2" label="Email" {email} {colour} />
    </div>
  </div>
</div>
