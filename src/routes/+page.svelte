<script lang="ts">
    import TaskCard from "$components/TaskCard.svelte";
    import type { PageData, ActionData } from "./$types";

    export let data: PageData;

    export let form: ActionData;

    const exampleTask = {
        id: "bndsajkds-dsnakd-dsand",
        title: "Cool title",
        content: "something really important to do",
    };
</script>

<svelte:head>
    <title>SadTasks | Home</title>
</svelte:head>

<main>
    <h1 class="main-title">SadTasks :( SvelteKit</h1>
    <section class="form-section">
        <form method="POST" action="?/save_task">
            <div class="form-group">
                <label for="title">Title</label>
                <input
                    name="title"
                    type="text"
                    id="title"
                    placeholder="Type here..."
                    required
                />
            </div>
            <div class="form-group">
                <label for="content">Content</label>
                <textarea
                    name="content"
                    type="text"
                    id="content"
                    placeholder="Type here..."
                />
            </div>
            <button class="submit-button">Save</button>
        </form>
    </section>
    {#if form?.success}
        <span class="success-message">Successfully saved the new task</span>
    {:else if form?.success === false}
        <span class="failure-message">Something went wrong when saving your task</span>
    {/if}
    <hr class="separator" />
    <section class="list-section">
        <h2 class="list-section__title">Your Tasks</h2>
        <ul class="task-list">
            {#if data.post.tasks.length === 0}
                <span>Nothing to see here</span>
            {/if}
            {#each data.post.tasks as task}
                <TaskCard {task} />
            {/each}
        </ul>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80vw;
        margin: 0 auto;
    }
    .main-title {
        font-size: 2.5vw;
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 10px;
        position: absolute;
        left: 10px;
        text-shadow: 5px 5px 5px #000000;
    }
    /* -------------- FORM STUFF ------------------ */
    .form-section {
        margin-top: 15px;
    }
    .form-section form {
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
    }
    .form-group {
        display: flex;
        flex-direction: column;
    }
    .form-group input,
    .form-group textarea {
        border-radius: 5px;
        border: 2px solid var(--alt-accent-color);
    }
    .form-group input {
        padding: 0.3rem;
    }
    .form-group textarea {
        width: 20vw;
        height: 20vh;
        max-width: 40vw;
    }
    .submit-button {
        align-self: center;
        border: none;
        background-color: var(--alt-accent-color);
        color: aliceblue;
        min-width: 8vw;
        max-width: 10vw;
        height: 2rem;
        border-radius: 100px;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        transition: all 100ms;
    }
    .submit-button:hover {
        font-size: 1.1rem;
        background-color: var(--alt-accent-color-darker);
    }
    /* -------------------------------------------- */
    .success-message {
        margin-top: 10px;
        color: var(--alt-accent-color);
    }
    .failure-message {
        margin-top: 10px;
        color: #ef2525;
    }
    .separator {
        background-color: var(--accent-color);
        width: 30vw;
        margin: 15px 0;
    }
    .list-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    .list-section__title {
        font-size: 1.5rem;
        font-weight: bold;
    }
    .task-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
</style>
