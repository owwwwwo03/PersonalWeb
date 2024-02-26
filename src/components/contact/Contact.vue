<template>
    <section
		class="pt-5 sm:pt-5"
	>		
		<div class="text-left ml-36">
			<h1 class="text-6xl font-bold">
				Contact
			</h1>
			<div class="input-section">
				<div class="hover-text">
					<input
					type="text"
					placeholder="Name"
					/>
				</div>
				<div class="hover-text">
					<input
					type="text"
					placeholder="Email"
					/>
				</div>
				<div class="hover-text">
					<input
					type="text"
					placeholder="Message"
					/>
				</div>
			</div>
			<div class="button-section">
				<button type="submit" class="btn-default">Submit</button>
			</div>		
		</div>
		
	</section>
  </template>
  
  <script lang="ts">
      
  </script>
  
  <style lang="scss" scoped>
  .input-section {
	margin-top: 113px;
	display: flex;
	flex-direction: column;
	gap: 16px;

	& input {
		color: #646464;
		background-color: #ffffff;
		box-shadow: 0px 3px 6px #00000029;
		border-radius: 28px;
		height: 48px;
		width: 100% !important;
		border-width: 0px;
		outline: none;
		padding-left: 24px;
		padding-right: 24px;

		&::placeholder {
		font-size: 16px;
		color: #c8c8c8;
		}
	
	}

	& select {
		color: #646464;
		background-color: #ffffff;
		box-shadow: 0px 3px 6px #00000029;
		border-radius: 28px;
		height: 48px;
		width: 100% !important;
		border-width: 0px;
		padding-left: 24px;
		padding-right: 24px;
	}
  
}
.button-section {
  margin-top: 118px;

  button {
    height: 48px !important;
    width: 100% !important;
    font-size: 18px !important;
  }
}

footer {
  padding-top: 123px;
  padding-bottom: 30px;
  .copy-right {
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #646464;
  }
}


.tooltip-text {
  visibility: hidden;
  position: absolute;
  z-index: 1;
  width: 140px;
  color: #646464;
  font-size: 10px;
  text-align: center;
  background-color: #fff;
  opacity: 0.7;
  border-radius: 20px;
  border-color: #646464;
  padding: 10px 15px 10px 15px;
}

.hover-text:hover .tooltip-text {
  visibility: visible;
}

#top {
  top: 250px;
  left: 30%;
}

#bottom {
  top: 415px;
  left: 30%;
}

#left {
  top: -8px;
  right: 120%;
}

#right {
  top: -8px;
  left: 120%;
}

.hover-text {
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  gap: 1px;
}
  
  </style>