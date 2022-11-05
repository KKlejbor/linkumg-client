<script lang="ts">
	import annoucements from '$lib/images/announcements.svg';
	import work from '$lib/images/work.svg';
	import tutor from '$lib/images/tutor.svg';
	import logo from '$lib/images/logo.svg';
	import placeholder from '$lib/images/placeholder.svg';
</script>

<div class="upper-navbar">
	<a href="/">
		<img src={logo} alt="logo" />
	</a>
	<div class="user-wrapper">
		<a href="/login"> <span>Login</span></a>
		<a href="/register"> <span>Register</span></a>
		<a href="/profile"> <span>Jan Kowalski</span></a>
		<img src={placeholder} alt="placeholder" />
	</div>
</div>
<div class="left-navbar">
	<a href="/annoucements">
		<img src={annoucements} alt="annoucements" />
	</a>
	<a href="/board">
		<img src={work} alt="work" />
	</a>
	<a href="/tutor">
		<img src={tutor} alt="tutor" />
	</a>
</div>

<style>
	.upper-navbar {
		position: sticky;
		top: 0;
		height: 100px;
		background-color: #111e2b;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 100px;
		z-index: 5;
	}

	.user-wrapper {
		display: flex;
		gap: 50px;
		align-items: center;
		overflow-x: auto;
	}

	a {
		color: white;
		text-decoration: none;
		font-size: 1.3rem;
	}

	a:hover {
		color: #cdcdcd;
	}

	img {
		cursor: pointer;
	}

	.left-navbar {
		z-index: 5;
		position: fixed;
		min-height: 100vh;
		width: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 150px;
		left: 0;
		top: 0;
		background-color: #111e2b;
	}
</style>
