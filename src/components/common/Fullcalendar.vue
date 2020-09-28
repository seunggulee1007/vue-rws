<template>
	<full-calendar :options="calendarOptions"></full-calendar>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
export default {
	created() {
		this.calendarOptions.eventContent = function(arg) {
			let italicEl = document.createElement('i');
			let data = arg.event.extendedProps;
			italicEl.className = data.class;
			italicEl.innerHTML = data.name;

			let pEl = document.createElement('p');
			pEl.innerHTML = `<b>${data.startDt}</b>`;
			let arrayOfDomNodes = [italicEl, pEl];
			return { domNodes: arrayOfDomNodes };
		};
	},
	components: {
		FullCalendar,
	},
	data() {
		return {
			calendarOptions: {
				plugins: [dayGridPlugin, interactionPlugin],
				locale: koLocale,
				headerToolbar: {
					left: 'prev, title, next',
					right: 'today',
				},
				events: [
					{
						title: 'event 1',
						date: '2020-09-09',
						startDt: '계획 00:00~00:00',
						class: 'atti tude1',
						name: '결근',
					},
					{
						title: 'event 2',
						date: '2020-09-10',
						startDt: '09:10~00:00',
						class: 'atti tude2',
						name: '지각',
					},
					{
						title: 'event 2',
						date: '2020-09-11',
						startDt: '09:10~00:00',
						class: 'atti tude3',
						name: '반차',
					},
					{
						title: 'event 2',
						date: '2020-09-14',
						startDt: '09:10~00:00',
						class: 'atti tude4',
						name: '반반차',
					},
					{
						title: 'event 2',
						date: '2020-09-15',
						startDt: '09:10~00:00',
						class: 'atti tude5',
						name: '연차',
					},
					{
						title: 'event 2',
						date: '2020-09-16',
						startDt: '09:10~00:00',
						class: 'atti tude5',
						name: '연차',
					},
					{
						title: 'event 2',
						date: '2020-09-17',
						startDt: '09:10~00:00',
						class: 'atti tude5',
						name: '연차',
					},
				],
			},
		};
	},
};
</script>
<style></style>
