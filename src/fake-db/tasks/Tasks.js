import mock from '../mockup'

const data = {
  tasks: [
    {
      id: 1,
      title: 'Entire change break our wife wide it daughter mention member.',
      dueDate: '2020-11-25',
      description:
        'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.',
      assignee: {
        fullName: 'Jacob Ramirez',

      },
      tags: ['update'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false,
      status:'completed'
    },
    {
      id: 2,
      title: 'Citizen stand administration step agency century.',
      dueDate: '2020-12-14',
      description:
        'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.',
      assignee: {
        fullName: 'Andrew Anderson',
        avatar: ''
      },
      tags: ['team', 'medium'],
      isCompleted: true,
      isDeleted: false,
      isImportant: false,
      status:'completed'
    },
    {
      id: 3,
      title: 'Meet Jane and ask for coffee ❤️',
      dueDate: '2020-11-25',
      description:
        'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.',
      assignee: {
        fullName: 'Benjamin Jacobs',
        avatar: ''
      },
      tags: ['high'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false,
      status:'completed'
    },
    {
      id: 4,
      title: 'Answer the support tickets and close completed tickets. ',
      dueDate: '2020-11-20',
      description:
        'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.',
      assignee: {
        fullName: 'Curtis Schmidt',
     
      },
      tags: ['medium'],
      isCompleted: false,
      isDeleted: false,
      isImportant: true,
      status:'completed'
    },
    {
      id: 5,
      title: 'Test functionality of apps developed by dev team for enhancements. ',
      dueDate: '2020-12-06',
      description:
        'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.',
      assignee: {
        fullName: 'Katherine Perkins',
     
      },
      tags: ['medium'],
      isCompleted: true,
      isDeleted: false,
      isImportant: true,
      status:'completed'
    },
    {
      id: 6,
      title: 'Conduct a mini awareness meeting regarding health care. ',
      dueDate: '2020-12-06',
      description:
        'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.',
      assignee: {
        fullName: 'David Murphy',
        avatar: ''
      },
      tags: ['high', 'medium'],
      isCompleted: true,
      isDeleted: true,
      isImportant: false
      ,
      status:'pending'
    },
    {
      id: 7,
      title: 'Plan new dashboard design with design team for Google app store. ',
      dueDate: '2020-12-05',
      description:
        'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.',
      assignee: {
        fullName: 'Karina Miller',
       
      },
      tags: ['medium'],
      isCompleted: false,
      isDeleted: false,
      isImportant: true
      ,
      status:'pending'
    },
    {
      id: 8,
      title: 'Pick up Nats from her school and drop at dance class😁 ',
      dueDate: '2020-12-08',
      description:
        'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.',
      assignee: {
        fullName: 'Thomas Moses',
       
      },
      tags: ['low', 'medium'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
      ,
      status:'pending'
    },
    {
      id: 9,
      title: 'Finish documentation and make it live',
      dueDate: '2020-11-25',
      description:
        'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.',
      assignee: {
        fullName: 'Angel Morrow',
        avatar: ''
      },
      tags: ['high', 'update'],
      isCompleted: false,
      isDeleted: true,
      isImportant: false
      ,
      status:'completed'
    },
    {
      id: 10,
      title: 'List out all the SEO resources and send it to new SEO team. ',
      dueDate: '2020-12-09',
      description:
        'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.',
      assignee: {
        fullName: 'Karen Carrillo',
        avatar: ''
      },
      tags: ['low'],
      isCompleted: true,
      isDeleted: false,
      isImportant: false
      ,
      status:'pending'
    },
    {
      id: 11,
      title: 'Refactor Code and fix the bugs and test it on server ',
      dueDate: '2020-12-01',
      description:
        'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.',
      assignee: {
        fullName: 'Timothy Brewer',
       
      },
      tags: ['low'],
      isCompleted: true,
      isDeleted: false,
      isImportant: true
      ,
      status:'completed'
    },
 
  ]
}

// ------------------------------------------------
// GET: Return Tasks
// ------------------------------------------------
mock.onGet('/apps/todo/tasks').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', filter, tag, sortBy: sortByParam = 'latest' } = config.params
  /* eslint-enable */
  // ------------------------------------------------
  // Get Sort by and Sort Direction
  // ------------------------------------------------
  let sortDesc = true

  const sortBy = (() => {
    if (sortByParam === 'title-asc') {
      sortDesc = false
      return 'title'
    }
    if (sortByParam === 'title-desc') return 'title'
    if (sortByParam === 'assignee') {
      sortDesc = false
      return 'assignee'
    }
    if (sortByParam === 'due-date') {
      sortDesc = false
      return 'dueDate'
    }
    return 'id'
  })()

  // ------------------------------------------------
  // Filtering
  // ------------------------------------------------
  const queryLowered = q.toLowerCase()

  const hasFilter = task => {
    if (filter === 'important') return task.isImportant && !task.isDeleted
    if (filter === 'completed') return task.isCompleted && !task.isDeleted
    if (filter === 'deleted') return task.isDeleted
    return !task.isDeleted
  }

  const includesFilter = task => task.tags.includes(queryLowered) || task.tags.some(tag => tag.includes(queryLowered))

  const includesDueDate = task => {
    const date = new Date(task.dueDate).getDate().toString().padStart(2, '0')
    const month = new Date(task.dueDate).toLocaleString('default', { month: 'short' }).toLowerCase()
    const dateMonth = `${date} ${month}`
    const monthDate = `${month} ${date}`

    return (
      date.includes(queryLowered) ||
      month.includes(queryLowered) ||
      dateMonth.includes(queryLowered) ||
      monthDate.includes(queryLowered)
    )
  }

  /* eslint-disable */
  const filteredData = data.tasks.filter(task => {
    if (filter || tag) {
      return (
        task.title.toLowerCase().includes(queryLowered) && hasFilter(task) && (tag ? task.tags.includes(tag) : true)
      )
    } else {
      return task.title.toLowerCase().includes(queryLowered) || includesFilter(task) || includesDueDate(task)
    }
  })
  /* eslint-enable  */

  // ------------------------------------------------
  // Perform sorting
  // ------------------------------------------------
  const sortTasks = key => (a, b) => {
    let fieldA
    let fieldB

    // If sorting is by dueDate => Convert data to date
    if (key === 'dueDate') {
      fieldA = new Date(a[key])
      fieldB = new Date(b[key])
      // eslint-disable-next-line brace-style
    }

    // If sorting is by assignee => Use `fullName` of assignee
    else if (key === 'assignee') {
      fieldA = a.assignee ? a.assignee.fullName : null
      fieldB = b.assignee ? b.assignee.fullName : null
    } else {
      fieldA = a[key]
      fieldB = b[key]
    }

    let comparison = 0

    if (fieldA === fieldB) {
      comparison = 0
    } else if (fieldA === null) {
      comparison = 1
    } else if (fieldB === null) {
      comparison = -1
    } else if (fieldA > fieldB) {
      comparison = 1
    } else if (fieldA < fieldB) {
      comparison = -1
    }

    return comparison
  }

  // Sort Data
  const sortedData = filteredData.sort(sortTasks(sortBy))
  if (sortDesc) sortedData.reverse()
  return [200, sortedData]
})

// ------------------------------------------------
// POST: Add new task
// ------------------------------------------------
mock.onPost('/apps/todo/add-tasks').reply(config => {
  // Get event from post data
  const { task } = JSON.parse(config.data)

  const { length } = data.tasks
  let lastIndex = 0
  if (length) {
    lastIndex = data.tasks[length - 1].id
  }
  task.id = lastIndex + 1

  data.tasks.push(task)

  return [201, { task }]
})

// ------------------------------------------------
// POST: Update Task
// ------------------------------------------------
mock.onPost('/apps/todo/update-task').reply(config => {
  const taskData = JSON.parse(config.data).task

  // Convert Id to number
  taskData.id = Number(taskData.id)

  const task = data.tasks.find(e => e.id === Number(taskData.id))
  Object.assign(task, taskData)

  return [200, { task }]
})

// ------------------------------------------------
// DELETE: Remove Task
// ------------------------------------------------
mock.onDelete('/apps/todo/delete-task').reply(config => {
  // Get task id from URL
  let taskId = config.taskId

  // Convert Id to number
  taskId = Number(taskId)

  const task = data.tasks.find(t => t.id === taskId)
  Object.assign(task, { isDeleted: true })
  return [200]
})
