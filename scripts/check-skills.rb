require "date"
require "set"
require "yaml"

root = File.expand_path("..", __dir__)
sections = YAML.safe_load_file(File.join(root, "_data", "skills.yml"), permitted_classes: [Date], aliases: true) || []
skills = sections.flat_map { |section| Array(section["skills"]) }.to_set
missing = Hash.new { |hash, tool| hash[tool] = [] }

Dir.glob(File.join(root, "_projects", "*.{md,markdown,html}")).each do |path|
  source = File.read(path)
  front_matter = source.match(/\A---\s*\r?\n(.*?)\r?\n---(?:\r?\n|\z)/m)
  next unless front_matter

  project = YAML.safe_load(front_matter[1], permitted_classes: [Date], aliases: true) || {}
  next if project["published"] == false

  Array(project["tools"]).each do |tool|
    missing[tool] << (project["name"] || File.basename(path)) unless skills.include?(tool)
  end
end

if missing.empty?
  puts "Skills check: all published project tools are listed."
else
  missing.sort.each do |tool, projects|
    warn "Skills warning: #{tool} is missing from _data/skills.yml (#{projects.uniq.join(', ')})."
  end
end
