import Ember from 'ember';

export default Ember.Controller.extend({
  saveNewPerson() {
    const attributes = {
      firstname: this.firstname,
      lastname: this.lastname,
      address: this.address,
      phoneNumber: this.phoneNumber,
    };
    console.log(attributes);
    fetch(`https://tiny-tn.herokuapp.com/collections/jf-people`, {
        method: `POST`,
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(attributes),
      }).then((res) => res.json())
      .then((newPerson) => {
        // this.clearForm();
        this.addPerson(newPerson);
      });
  },
  addPerson(person) {
    this.set(`model`, [person, ...this.model]);
  },
});
