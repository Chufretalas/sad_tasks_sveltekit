<script lang="ts">
    import type ITask from "$interfaces/ITask";
    export let task: ITask;
</script>

<div class="task-card-wrapper">
    <h3 class="task-card__title">{task.title}</h3>
    <p class="task-card__content">{task.content}</p>
    <span>{task.id}</span>
</div>

<style>
    .task-card-wrapper {
        width: 20vw;
        height: 20vh;
        background-color: var(--secondary-color);
        border: 3px solid var(--accent-color);
        border-radius: 20px;
        padding: 20px;
    }
    .task-card__title::before {
        content: "|";
        font-size: 1.4rem;
        margin-right: 5px;
        color: var(--alt-accent-color);
    }
    .task-card__title {
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .task-card__content {
        font-size: 1rem;
        white-space: pre;
    }
</style>
