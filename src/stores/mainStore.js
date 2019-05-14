import { observable } from "mobx";

class mainStore {

  @observable title = "";
  @observable finished = false;
  @observable user = null;
  @observable DemoData = {
    resources: [
      {
        id: 'r0',
        name: 'Иванов И.В.',
        //groupOnly: true
      },
      {
        id: 'r1',
        name: 'Петров И.П.',
        //groupOnly: true
      },
    ],
    events: [
      {
        id: 1,
        start: '2019-05-10 09:30:00',
        end: '2019-05-10 10:30:00',
        resourceId: 'r0',
        title: 'хоршая задача',
        bgColor: '#74D971',
      },
      {
        id: 4,
        start: '2019-05-05 09:30:00',
        end: '2019-05-06 8:30:00',
        resourceId: 'r1',
        title: 'тест тест тест',
        bgColor: '#5BC0EB',
        //showPopover: false
      },
      {
        id: 5,
        start: '2019-05-05 09:30:00',
        end: '2019-05-06 8:30:00',
        resourceId: 'r1',
        title: 'тест fndskj тест',
        bgColor: '#5BC0EB',
        //showPopover: false
      },

      {
        id: 2,
        start: '2019-05-05 09:30:00',
        end: '2019-05-15 8:30:00',
        resourceId: 'r0',
        title: 'тест тест тест',
        bgColor: '#FDE74C',
        //showPopover: false
      }
      , {
        id: 3,
        start: '2019-05-01 09:30:00',
        end: '2019-05-08 11:30:00',
        resourceId: 'r0',
        title: 'плохая задача',
        bgColor: '#DD5B3C',
        //showPopover: false
      },
      {
        id: 6,
        start: '2019-05-06 09:30:00',
        end: '2019-05-08 8:30:00',
        resourceId: 'r0',
        title: 'тест vsdp тест',
        bgColor: '#5BC0EB',
        //showPopover: false
      },
      {
        id: 7,
        start: '2019-05-06 09:30:00',
        end: '2019-05-08 8:30:00',
        resourceId: 'r0',
        title: 'тест vsdp тест',
        bgColor: '#5BC0EB',
        //showPopover: false
      },
      {
        id: 8,
        start: '2019-05-06 09:30:00',
        end: '2019-05-08 8:30:00',
        resourceId: 'r0',
        title: 'тест vsdp тест',
        bgColor: '#5BC0EB',
        //showPopover: false
      },
    ]
  }
}
export default new mainStore();