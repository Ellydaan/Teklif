<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Poste</th>
          <th scope="col">lieux</th>
          <th scope="col">mission</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id,poste, lieux,mission } in users" :key="id">
          <td>{{ poste }}</td>
          <td>{{ lieux }}</td>
          <td>{{ mission }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '@/main'

export default {
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>
