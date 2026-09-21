export default function AnimalList({
  animals = [],
  onAdd,
})

and:

//```jsx
<button
  className="primary-button"
  onClick={onAdd}
>