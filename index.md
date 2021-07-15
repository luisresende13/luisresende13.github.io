<!doctype html>
<html lang=“pt-br”>

<head>
		<title>Moode Tracker</title>
		<meta charset=“UTF-8”>
		// <script src='script.js'></script>
		<style>
			body { width:200px;
				   height:500px; }
		</style>
</head>

<body>
	
	<div>
		
		<h1>New Entry</h1>

		<form id='mood_form'>
			
			<p>Como está se sentindo?</p>
			
			<input type='radio' name='mood', value='Muito mal'>Muito mal	
			<input type='radio' name='mood', value='Mal'>Mal
			<input type='radio' name='mood', value='Neutro'>Neutro
			<input type='radio' name='mood', value='Bem'>Bem
			<input type='radio' name='mood', value='Muito bem'>Muito bem

			<p>What emotions are present?</p>
			
			<input type='ckeckbox' id='emotion1', name='emotion1' value='Happy'>
			<label for=emotion1>Happy</label>
			<input type='ckeckbox' id='emotion2', name='emotion2' value='Sad'>
			<label for=emotion2>Sad</label>
			<input type='ckeckbox' id='emotion3', name='emotion3' value='Angry'>
			<label for=emotion2>Angry</label>
			<input type='ckeckbox' id='emotion4', name='emotion4' value='Calm'>
			<label for=emotion2>Calm</label>
			
			<button type='button' id='submit_btn'>Submit</button>

			<p id='submit_msg'></p>

		</form>
	
	</div>

</body>

</html>