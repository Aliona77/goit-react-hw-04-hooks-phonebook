import {useState} from "react";
import { Label, Input, ButtonAdd, Span } from './ContactForm.styles'
import { v4 as uuidv4 } from 'uuid';

export default function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')

   const  nameInputId = uuidv4();
   const  numberInputId = uuidv4();
    
  const  handleChange = e => {
  const { name, value } = e.currentTarget;
      
switch(name){
    case "name":
        setName(value);
        break;
    
    case "number":
        setNumber(value);
        break;

    default: return;
      };
    };


  const handleSubmit = (e) => {
        e.preventDefault();
      
      onSubmit(name, number);
      reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    }

     return (
            <form onSubmit={handleSubmit}>
            <Label>
                <Span htmlFor={numberInputId}>Name</Span>
                    <Input
                        type="text"
                         name="name"
                        placeholder= "Enter name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={handleChange}
                        id={nameInputId}
                        value={name}
                    />
            </Label>
        
            <Label>
                <Span htmlFor={numberInputId}>Number</Span>
                 <Input
                  type="tel"
                    name="number"
                    placeholder="Enter number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleChange}
                    value={number}
                    id={nameInputId}
                />
                 </Label>
               
               <ButtonAdd
                    type="submit"
                    disabled={!name|| !number} >Add contact</ButtonAdd>
              </form>
        )
    
}
