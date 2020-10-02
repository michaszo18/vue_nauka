const app = Vue.createApp({
  data() {
    return {
      actionText: 'start',
      run: false,
      workTime: 0,
      startWork: 0,
      endWork: 0,
      i: 0, j: 0,
      workHisory: []
    }
  },
  methods: {
      refresh() {
        mainInterval = setInterval(() => {
          if (this.run === false) clearInterval(mainInterval);
          this.i++; this.j++;
        }, 1000);
      },
      timer() {
        if (this.run === false) {
          this.start();
        } else {
          this.stop();
        }
      },
      start() {
        console.log('start');
        this.i = 0;
        this.actionText = 'stop';
        this.run = true;
        this.startWork = Date.now();
        this.refresh();
      }, 
      stop() {
        console.log('stop');
        this.actionText = 'start';
        this.run = false;
        this.endWork = Date.now();
        this.workTime = this.endWork - this.startWork;

        this.workHisory.push({ 
          startWork: this.formatDate(this.startWork),
          endWork: this.formatDate(this.endWork),
          workTime: this.formatDate(this.workTime)
        });

      },
      formatDate(date) {
        return new Date(date).toLocaleTimeString();
      }
  },
});



app.mount('#user-goal');


