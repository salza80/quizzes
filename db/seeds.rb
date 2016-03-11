# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


#test data only
Quiz.destroy_all

quizzes = Quiz.create([
    {title: 'my first quiz', url_name: 'my_first_quiz', description: 'my bestest quiz ever', img_url: 'threeDogs.png'},
    {title: 'my second quiz', url_name: 'my_second_quiz', description: 'my worst quiz ever', img_url: 'threeDogs.png'},
    {title: 'my third quiz', url_name: 'my_third_quiz', description: 'my only single question quiz ever', img_url: 'threeDogs.png'}
  ])

questions =  Question.create([
    {order: 1, title: 'my first quiz', quiz: quizzes.first, description: 'my bestest quiz ever', img_url: 'threeDogs.png'},
    {order: 2, title: 'my second quiz', quiz: quizzes.first, description: 'my worst quiz ever', img_url: 'threeDogs.png'},
    {order: 3, title: 'my third quiz', quiz: quizzes.first, description: 'my only single question quiz ever', img_url: 'threeDogs.png'}
  ])

answers =  Answer.create([
    {order: 1, title: 'my first answer', question: questions.first, points: 1},
    {order: 2, title: 'my second answer',question: questions.first, points: 4},
    {order: 3, title: 'my third anser', question: questions.first, points: 2}
  ])

answers = Answer.create([
    {order: 1, title: 'my first a', question: questions[1], points: 1},
    {order: 2, title: 'my second anser',question: questions[1], points: 5},
    {order: 3, title: 'my third answer',question: questions[1], points: 7}
  ])

answers = Answer.create([
    {order: 1, title: 'my first a', question: questions[2], points: 1},
    {order: 2, title: 'my second anser',question: questions[2], points: 3},
    {order: 3, title: 'my third answer',question: questions[2], points: 0},
    {order: 4, title: 'my fourth answer',question: questions[2], points: 3}
  ])

outcomes =  Outcome.create([
    {order: 1, title: 'my first outcome', quiz: quizzes.first, description: 'my bestest outcome', img_url: 'threeDogs.png', points_to: 2},
    {order: 2, title: 'my second outcome',  quiz: quizzes.first, description: 'my toher outcome', img_url: 'threeDogs.png', points_to: 6},
    {order: 3, title: 'my third outcome',  quiz: quizzes.first, description: 'my only other outcomer', img_url: 'threeDogs.png', points_to: 14}
  ])




