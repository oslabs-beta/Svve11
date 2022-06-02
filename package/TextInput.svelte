<!-- ************************* SCRIPTS ************************* -->
<script>//required attributes
export let label = '';
export let placeholder = '';
export let id = '';
export let type = '';
//optional attributes
export let max = '';
export let min = '';
export let maxlength = '';
export let size = '';
export let step = '';
export let inputStyle = '';
export let labelStyle = '';
export let autocomplete = false;
export let disabled = false;
export let multiple = false;
export let readonly = false;
export let required = false;
</script>


<!-- ************************* HTML ************************* -->
<label 
  for={id}
  style={labelStyle}
  class='sv-textinput-label'>
  {label}
</label>
<input 
  {id} 
  {type} 
  {placeholder} 
  {min} 
  {max} 
  {maxlength} 
  {size}
  {step}
  {disabled}
  {autocomplete}
  {multiple}
  {readonly}
  {required}
  style={inputStyle}/>


<!-- ************************* STYLES ************************* -->  
<style>
	/*
    Style these however we'd like later
  */
</style>
