class QuoteRequest
  include ActiveModel::Model

  attr_accessor :name, :email, :website, :description, :budget

  validates :name, presence: true, length: { minimum: 3, maximum: 50 }
  validates :email, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A^(?!.*\.{2})[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\z/i
  validates :email, format: { with: VALID_EMAIL_REGEX }
  validates :description, presence: true
  validates :budget, length: { maximum: 50 }
end

