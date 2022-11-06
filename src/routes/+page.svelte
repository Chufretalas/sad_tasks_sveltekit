<script lang="ts">
</script>

<svelte:head>
    <title>SadTasks | Home</title>
</svelte:head>

<main>
    <h1>SadTasks :( SvelteKit</h1>
    <section class="form-section">
        <form action="">
            <div class="form-group">
                <label for="title">Title</label>
                <input name="title" type="text" id="title" />
            </div>
            <div class="form-group">
                <label for="content">Content</label>
                <input name="content" type="text" id="content" />
            </div>
            <button>Save</button>
        </form>
    </section>
    <hr class="separator" />
    <section class="list-section">
        <h2>Your tasks</h2>
        <ul class="task-list">
            <li>Task</li>
            <li>Task</li>
            <li>Task</li>
            <li>Task</li>
            <li>Task</li>
            <li>Task</li>
        </ul>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .separator {
        background-color: var(--accent-color);
        width: 30vw;
    }
</style>
