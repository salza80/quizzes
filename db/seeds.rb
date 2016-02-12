# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


#test data only
Quiz.create([
    {name: 'my first quiz', description: 'my bestest quiz ever', img_url: 'fuckhear.com/image.jpg'},
    {name: 'my second quiz', description: 'my worst quiz ever', img_url: 'wow.com/image.jpg'},
    {name: 'my third quiz', description: 'my only single question quiz ever', img_url: 'gmail.com/image.jpg'}
  ])
