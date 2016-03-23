require 'nokogiri'
namespace :db do
  desc 'Load Quiz Data'
  task load_quizzes: :environment do


    Dir.foreach(Rails.root + 'db/data') do |dir|
      next if dir == '.' or dir == '..'
        f = File.open(File.join(Rails.root, 'db/data', dir, 'quiz.xml'))
        loadquiz = Nokogiri::XML(f).xpath('root')
        puts "loading quiz directory #{dir}"
        quiz = Quiz.find_or_initialize_by( 
          url_name: loadquiz.xpath('url_name').text
        )
        quiz.title = loadquiz.xpath('title').text
        quiz.img_url = loadquiz.xpath('img_url').text
        quiz.description = loadquiz.xpath('description').text
        f.close

        quiz.questions.destroy_all

        f = File.open(File.join(Rails.root, 'db/data', dir, 'questions.xml'))
        loadquestions = Nokogiri::XML(f).xpath('root')
        loadquestions.xpath('questions').each do |q|
          question = quiz.questions.build(
            title: q.xpath('title').text,
            description: q.xpath('description').text,
            img_url: q.xpath('img_url').text,
            order:  q.xpath('order').text.to_i || 0
          )
          (1..6).each do |i|
            next if q.xpath("answer_#{i}_title").text.empty?
            question.answers.build(
              title: q.xpath("answer_#{i}_title").text,
              points: q.xpath("answer_#{i}_points").text.to_i,
              order:  q.xpath('order').text.to_i || Random.new().rand(100) 
            )
          end
        end
        f.close

        quiz.outcomes.destroy_all

        f = File.open(File.join(Rails.root, 'db/data', dir, 'outcomes.xml'))
        loadoutcomes = Nokogiri::XML(f).xpath('root')
        loadoutcomes.xpath('outcomes').each do |q|
          quiz.outcomes.build(
            title: q.xpath('title').text,
            description: q.xpath('description').text,
            img_url: q.xpath('img_url').text,
            points_to: q.xpath('points_to').text.to_i,
            order:  q.xpath('order').text.to_i || 0
          )
        end
        f.close
        puts "saving quiz #{dir}"
        quiz.save!
     end
  end
end



