import { LightningElement} from 'lwc';
import recentContacts from '@salesforce/apex/RecentContacts.recentContacts';
export default class ContactsRet extends LightningElement {

    data;
    error;

    connectedCallback(){
        recentContacts().then(response =>{
            this.data = response;
            console.log(response)
        })

    }
}

